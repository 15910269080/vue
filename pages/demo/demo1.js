Vue.component('todo-item',{
    props: ['todo'],
    template:'<li>{{todo.text}}</li>'
})

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!' + new Date().toLocaleString(),
        seen: true,
        todos: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ],
        msg: 'Hello wjk!',
        msgInput: 'msgInput',
        firstName: 'wjk',
        lastName: 'czj'
    },
    computed:{
        reverseMsgComputed: function () {
            return this.msg.split('').reverse().join('')
        },
        fullName:{
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var fullName = newValue.split(' ')
                this.firstName = fullName[0]
                this.lastName = fullName[fullName.length-1]
            }
        }
    },
    watch:{

    },
    methods:{
        reverseMsg: function () {
            this.msg = this.msg.split('').reverse().join('')
        },
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})
