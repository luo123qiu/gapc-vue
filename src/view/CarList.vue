<template>
    <div id="carlist">
        <Menu mode="horizontal" theme="primary" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    菜单1
                </template>
                <Menu-group title="菜单1-1">
                    <Menu-item name="1-1">菜单1-1</Menu-item>
                    <Menu-item name="1-2">菜单1-1</Menu-item>
                    <Menu-item name="1-3">菜单1-1</Menu-item>
                </Menu-group>
                <Menu-group title="菜单2-1">
                    <Menu-item name="2-1">菜单1-1</Menu-item>
                    <Menu-item name="2-2">菜单1-1</Menu-item>
                    <Menu-item name="2-3">菜单1-1</Menu-item>
                </Menu-group>
            </Submenu>
            <Menu-item name="2">
                菜单2
            </Menu-item>
            <Menu-item name="3">
                菜单3
            </Menu-item>
            <Menu-item name="4">
                菜单4
            </Menu-item>
        </Menu>
        <Form>
            <Cascader :data="start" v-model="start1"></Cascader>
            <Cascader :data="end" v-model="end1"></Cascader>
            <Cascader :data="date" v-model="date1"></Cascader>
            <i-switch v-model="switch1"></i-switch>
            <Input v-model="telphone" placeholder="please input..."></Input>
            <Input v-model="remark" type="textarea"></Input>
            <Button type="primary">提交</Button>
        </Form>
        <div>我擦</div>
        <a href="#/">返回</a>
    </div>
</template>

<script>
    export default {
        name: 'carlist',
        data () {
            return {
                switch1: false,
                telphone: '',
                remark: '',
                start1: [],
                start: [
                    {
                        value: '北京',
                        label: '北京',
                        children: [
                            {
                                value: '故宫',
                                label: '故宫'
                            },
                            {
                                value: '天坛',
                                label: '天坛'
                            }
                        ]
                    },
                    {
                        value: '江苏',
                        label: '江苏',
                        children: [
                            {
                                value: '南京',
                                label: '南京'
                            },
                            {
                                value: '苏州',
                                label: '苏州'
                            }
                        ]
                    }
                ],
                end1: [],
                end: [
                    {
                        value: '北京',
                        label: '北京',
                        children: [
                            {
                                value: '故宫',
                                label: '故宫'
                            },
                            {
                                value: '天坛',
                                label: '天坛'
                            }
                        ]
                    },
                    {
                        value: '江苏',
                        label: '江苏',
                        children: [
                            {
                                value: '南京',
                                label: '南京'
                            },
                            {
                                value: '苏州',
                                label: '苏州'
                            }
                        ]
                    }
                ],
                date1: [],
                date: [
                    {
                        value: '今天',
                        label: '今天',
                        children: [
                            {
                                value: '05:00',
                                label: '05:00'
                            }
                        ]
                    },
                    {
                        value: '明天',
                        label: '明天',
                        children: [
                            {
                                value: '05:00',
                                label: '05:00'
                            }
                        ]
                    },
                    {
                        value: '工作日',
                        label: '工作日',
                        children: [
                            {
                                value: '05:00',
                                label: '05:00'
                            }
                        ]
                    },
                    {
                        value: '每天',
                        label: '每天',
                        children: [
                            {
                                value: '05:00',
                                label: '05:00'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            
        }
    }
</script>