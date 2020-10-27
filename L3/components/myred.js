Vue.component('my-red', {
    //模板
    template: `<div style="color:red;" :style="{fontSize:size}">
            <slot></slot>
            </div>`,
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    // 当在div中使用这个组件的时候可以通过props中设置的属性来向这个组件进行传值 设置一些自定义的样式
    // props 也可以接受数组 ['size'] 但是这样好像不能设置其他属性
    // 一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop
    props: {
        size: {
            // 这个属性接受什么类型的参数
            type: String,
            // 如果设置为true组件中不设置这个属性就会报错
            // required: true
            default: '60px'
        },

    }

})