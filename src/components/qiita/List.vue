<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            getStatus: true,
        }
    },
    computed: {
        ...mapState('qiita', ['postList'])
    },
    methods: {
        async getData() {
            this.getStatus = await this.$store.dispatch('qiita/getData')
        },
    },
}
</script>

<template>
    <div id="qiita-list">
        <p v-if="getStatus == false">接続エラーです</p>

        <p><button type="button" @click="getData">データ取得</button></p>

        <table id="qiita-table" v-if="postList.length > 0">
            <tr>
                <th>ユーザー</th>
                <th>タイトル</th>
                <th>ページ</th>
            </tr>
            <tr v-for="(val, key) in postList" :key=key>
                <td>{{ val.user }}</td>
                <td>{{ val.title}}</td>
                <td><a v-bind:href="val.url">ページ</a></td>
            </tr>
        </table>
        <p v-else>データがありません</p>
    </div>
</template>

<style scoped>
    #qiita-table, #qiita-table tr, #qiita-table th, #qiita-table td {
        margin: 0 auto;
        font-size: 20px;
        border-collapse: collapse;
        border: 1px solid #333;
        text-align: left;
    }
</style>