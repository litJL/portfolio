<script lang="ts" setup></script>

<template>
    <div>
        <span>
            {{ $t("hello_world") }}
        </span>
        <UButton
            to="/test"
            label="test"
        />
    </div>
</template>
