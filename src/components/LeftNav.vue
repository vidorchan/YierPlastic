<template>
    <el-menu :default-active="this.$router.path" class="el-menu-vertical-demo" unique-opened router>
        <el-menu-item index="/na">{{ $t('message.na')}}</el-menu-item>
        <el-menu-item index="/ab?cid=1">{{ $t('message.acj')}}</el-menu-item>
        <el-menu-item index="/ab?cid=2">{{ $t('message.acb')}}</el-menu-item>
        <el-menu-item index="/ab?cid=3">{{ $t('message.ab')}}</el-menu-item>
        <el-menu-item index="/ab?cid=4">{{ $t('message.fsb')}}</el-menu-item>
        <el-menu-item index="/ab?cid=5">{{ $t('message.apj')}}</el-menu-item>
        <el-menu-item index="/ab?cid=6">{{ $t('message.pab')}}</el-menu-item>
    </el-menu>
</template>