<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();

const localeBuffer = ref(locale.value);

const items = computed(() => {
    return locales.value.map((l) => ({
        ...l,
        icon: `i-circle-flags-${l.code.slice(0, 2)}`,
    }));
});

function changeLocale() {
    setLocale(localeBuffer.value);
}
</script>

<template>
    <!-- Client Only since it uses client data -->
    <ClientOnly>
        <USelect
            v-model="localeBuffer"
            :items
            :label-key="'name'"
            :value-key="'code'"
            class="w-32"
            variant="ghost"
            @change="changeLocale"
        >
            <template #leading="{ modelValue }">
                <UIcon
                    :name="
                        items.find((item) => item.code === modelValue)?.icon ||
                        ''
                    "
                    class="size-4"
                />
            </template>
        </USelect>

        <!-- Show skeleton while loading -->
        <template #fallback>
            <USkeleton class="h-8 w-32 rounded-md" />
        </template>
    </ClientOnly>
</template>
