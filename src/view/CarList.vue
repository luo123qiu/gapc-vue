<template>
    <div id="carlist">
        <Menu mode="horizontal" theme="primary" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    菜单1
                </template>
                <Menu-group title="菜单1-1">
                    <Menu-item name="1-1"><a href="#/post">菜单1-1</a></Menu-item>
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
        <ul class="list">
            <li v-for="item in lists">
                {{ item.start_local }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'carlist',
        data () {
            return {
                lists: []
            }
        },
        methods: {

        },
        mounted () {
            this.$http.get('http://gapc/lists').then(
                response => {
                    this.lists = response.data.driver;
                }
            )
        }
    }
</script>