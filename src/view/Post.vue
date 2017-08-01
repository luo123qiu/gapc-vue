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
        <Form ref="formInline" :model="formInline" :label-width="80" :rules="ruleInline">
            <Form-item label="从" prop="start_local">
                <Cascader :data="local" v-model="formInline.start_local"></Cascader>
            </Form-item>
            <Form-item label="到" prop="end_local">
                <Cascader :data="local" v-model="formInline.end_local"></Cascader>
            </Form-item>
            <Form-item label="日期" prop="go_date">
                <Radio-group v-model="formInline.go_date">
                    <Radio label="today">今天</Radio>
                    <Radio label="tomorrow">明天</Radio>
                    <Radio label="workday">工作日</Radio>
                    <Radio label="everyday">每天</Radio>
                </Radio-group>
            </Form-item>
            <Form-item label="时间" prop="go_time">
                <Time-picker type="time" format="HH:mm" placeholder="选择时间" v-model="formInline.go_time"></Time-picker>
            </Form-item>
            <Form-item label="高速">
                <i-switch v-model="formInline.highway"></i-switch>
            </Form-item>
            <Form-item prop="contact" label="电话">
                <Input v-model="formInline.contact" placeholder="电话"></Input>
            </Form-item>
            <Form-item prop="remark" label="备注">
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
                formInline: {
                    start_local: [],
                    end_local: [],
                    highway: false,
                    go_date: '',
                    go_time: '',
                    contact: '',
                    remark: ''
                },
                ruleInline: {
                    start_local: [
                        {
                            required: true,
                            type: 'array',
                            message: '请选择出发地点',
                            trigger: 'change'
                        }
                    ],
                    end_local: [
                        {
                            required: true,
                            type: 'array',
                            message: '请选择目的地',
                            trigger: 'change'
                        }
                    ],
                    go_date: [
                        {
                            required: true,
                            message: '请选择出发日期',
                            trigger: 'change'
                        }
                    ],
                    go_time: [
                        {
                            required: true,
                            type: 'date',
                            message: '请选择出发时间',
                            trigger: 'change'
                        }
                    ],
                    contact: [
                        {
                            required: true,
                            message: '请填写联系电话',
                            trigger: 'blur'
                        }
                    ],
                },
                local: [
                    {
                        value: '北京',
                        label: '北京',
                        children: [
                            {
                                value: '天宫院地铁站',
                                label: '天宫院地铁站'
                            }, {
                                value: '西红门地铁站',
                                label: '西红门地铁站'
                            }, {
                                value: '首都机场',
                                label: '首都机场'
                            }, {
                                value: '北京西站',
                                label: '北京西站'
                            }, {
                                value: '北京南站',
                                label: '北京南站'
                            }, {
                                value: '亦庄',
                                label: '亦庄'
                            }, {
                                value: '北京地区',
                                label: '北京地区'
                            }
                        ]
                    },
                    {
                        value: '固安',
                        label: '固安',
                        children: [
                            {
                                value: '孔雀城',
                                label: '孔雀城'
                            }, {
                                value: '大卫城',
                                label: '大卫城'
                            }, {
                                value: '英国宫',
                                label: '英国宫'
                            }, {
                                value: '固安汽车站',
                                label: '固安汽车站'
                            }, {
                                value: '京南绿洲',
                                label: '京南绿洲'
                            }, {
                                value: '中宏新界',
                                label: '中宏新界'
                            }, {
                                value: '天顺家园',
                                label: '天顺家园'
                            }, {
                                value: '绿宸万华城',
                                label: '绿宸万华城'
                            }, {
                                value: '中鼎凤凰城',
                                label: '中鼎凤凰城'
                            }, {
                                value: '固安县政府',
                                label: '固安县政府'
                            }, {
                                value: '金海太阳城',
                                label: '金海太阳城'
                            }, {
                                value: '固安县人民医院',
                                label: '固安县人民医院'
                            }, {
                                value: '和美紫晶花园',
                                label: '和美紫晶花园'
                            }, {
                                value: '固安其他',
                                label: '固安其他'
                            }
                        ]
                    }
                ],
                results: []
            }
        },
        methods: {
            submit (form) {
                this.$refs[form].validate((valid) => {
                    console.log(valid);
                    if (valid) {
                        const postData = {
                            start_local: this.formInline.start_local,
                            end_local: this.formInline.end_local,
                            highway: this.formInline.highway,
                            go_date: this.formInline.go_date,
                            go_time: this.formInline.go_time,
                            contact: this.formInline.contact,
                            remark: this.formInline.remark
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
            this.$http.get('http://gapc/lists').then(
                response => {
                    this.results = response.data;
                    console.log(this.results);
                }
            )
        }
    }
</script>