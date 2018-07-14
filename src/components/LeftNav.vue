<template>
    <el-menu :default-active="this.$router.path" class="el-menu-vertical-demo" unique-opened router>
        <el-menu-item index="/products?cid=0">{{ $t('message.na')}}</el-menu-item>
        <el-menu-item index="/products?cid=1">{{ $t('message.is')}}</el-menu-item>
        <el-menu-item index="/products?cid=2">{{ $t('message.ab')}}</el-menu-item>
        <el-menu-item index="/products?cid=3">{{ $t('message.fl')}}</el-menu-item>
        <el-menu-item index="/products?cid=4">{{ $t('message.lb')}}</el-menu-item>
        <el-menu-item index="/products?cid=5">{{ $t('message.cj')}}</el-menu-item>
    </el-menu>
</template>