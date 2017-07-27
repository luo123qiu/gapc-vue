<template>
    <div id="carlist">
        <Menu mode="horizontal" theme="primary" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    菜单1
                </template>
                <Menu-group title="菜单1-1">
                    <Menu-item name="1-1"><a href="#/show/">菜单1-1</a></Menu-item>
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
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <Form-item>
                <Cascader :data="start" v-model="start1"></Cascader>
            </Form-item>
            <Form-item>
                <Cascader :data="end" v-model="end1"></Cascader>
            </Form-item>
            <Form-item>
                <Cascader :data="date" v-model="date1"></Cascader>
            </Form-item>
            <Form-item>
                <i-switch v-model="switch1"></i-switch>
            </Form-item>
            <Form-item prop="telphone">
                <Input v-model="formInline.telphone" placeholder="please input..."></Input>
            </Form-item>
            <Form-item prop="remark">
                <Input v-model="formInline.remark" type="textarea"></Input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="submit('formInline')">提交</Button>
            </Form-item>
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
                formInline: {
                    telphone: '',
                    remark: ''
                },
                results: [],
                ruleInline: {
                    telphone: [
                        {
                            required: true,
                            message: '请填写联系电话',
                            trigger: 'blur'
                        }
                    ]
                },
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
            submit (form) {
                this.$refs[form].validate((valid) => {
                    console.log(valid);
                    if (valid) {
                        const postData = {
                            switch: this.switch1,
                            telphone: this.formInline.telphone,
                            remark: this.formInline.remark,
                            start1: this.start1,
                            end1: this.end1,
                            date1: this.date1
                        }
                        console.log(postData);
                        /*this.$http.post('url', postData).then(response => {
                            console.log(response);
                        })*/
                    } else {
                        console.log('b');
                    }
                })
            }
        },
        mounted () {
            this.$http.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ce282ba503d6480bbb0ba63686558cbc').then(
                response => {
                    this.results = response.data.results;
                    console.log(this.results);
                }
            )
        }
    }
</script>