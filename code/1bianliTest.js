
//定义链表结构
function Node(value) {
    this.value = value
    this.next = null
}
//普通链表遍历
var n1 = new Node(10)
var n2 = new Node(13)
var n3 = new Node(7)
var n4 = new Node(9)
var n5 = new Node(17)

n1.next = n2
n2.next = n3
n3.next = n4 
n4.next = n5
n5.next = null

// temp = n1
// while(true){
//     if(temp != null){
//         console.log(temp.value)
//     }else{
//         return
//     }
//     temp = temp.next
// }



//递归链表遍历
//每次调用相同的函数,有结束条件

function bianList(n1){
    temp = n1
    if(n1!==null){
        console.log(temp.value)
        bianList(temp.next)
    }
    return 
}

bianList(n1)