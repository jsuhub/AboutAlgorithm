//先定义一个链表结构

function LinkNode(data) {
    var data
    var next
    this.data = data
    this.next = null
}

var n1 = new LinkNode(1)
var n2 = new LinkNode(2)
var n3 = new LinkNode(3)
var n4 = new LinkNode(4)
var n5 = new LinkNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = null
//n1->n2->n3->n4->n5
//遍历该链表
//1.循环遍历
function traverseLink(node) {
    var temp = node
    while (true) {
        if (temp != null) {
            console.log(temp.data)
        } else {
            return
        }
        temp = temp.next
    }
}
// bianLiLink(n1)
//2.递归遍历
//注意：1.每次递归要做的事，2.跳出的条件
const RecursiveTraversalLink = (node) => {
    node != null ? (console.log("当前值为：", node.data), RecursiveTraversalLink(node.next)) : null
}

// RecursiveTraversalLink(n1)

//3.链表的逆置
//n1->n2->n3->n4->n5  -------> n1<-n2<-n3<-n4<-n5
//思想：先从头开始遍历到最后一个节点，第一个结点的next=null，后面每个结点的next=前一个结点的引用
//具体实现：1.先判断是否为第一个结点，第一个结点做特殊处理 2.在遍历到当前结点时，用一个变量保存next指向，一个变量保存当前元素的引用 

/**
 * @param {node} node1 -the first node in a link
 * @returns {node} -the last node in a link
 */
function ReverseLinkList(node) {
    //循环法

    // var temp = node //temp指向每个结点
    // var preNode = null
    // var nextNode

    // while (true) {
    //     if (temp != null) {  //写逻辑的地方
    //         nextNode = temp.next  //nodeNext指向当前结点的下一个结点
    //         temp.next = preNode  //当前结点指向前一个结点
    //         preNode = temp //用preNode保存当前结点，用做下一个结点寻找前一个结点
    //     } else {
    //         return preNode
    //     }
    //     temp = nextNode //temp又指向当前结点的下一个位置
    // }


    //递归法
    if (node.next.next == null) {   //代表当前结点为倒数第二个
        node.next.next = node  //让最后一个结点指向倒数第二个
        return node.next   //返回最后一个结点（结束条件）
    } else {               //表示当前结点不是第二个
        var result = ReverseLinkList(node.next)  //node为倒数第三个结点，一直循环直到倒数第二个结点，result=最后一个结点
        node.next.next = node   //让后一个结点指向自己
        node.next = null   //自己指向null
        return result  //返回最后一个结点 （结束条件）  相当于掉函数没有返回值
    }
}

// RecursiveTraversalLink(n1)
// console.log('--------------------------------------')
// RecursiveTraversalLink((ReverseLinkList(n1)))

var newRoot = ReverseLinkList(n1)  //获取新指向的链表的根节点
RecursiveTraversalLink(newRoot)

// nodeNow = n1
// n1.next = null
// preNode = n1
// temp = n1.next //n1正常

// nodeNow = n2
// temp.next = n1
// preNode = n2
// temp = n3

// //..............

// nodeNow = n5
// n5.next = n4
// preNode = n5
// temp = null

