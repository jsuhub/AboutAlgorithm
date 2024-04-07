//
function LinkNode(data){
    this.data=data
    this.next = null
}

//定义结点
var root = new LinkNode(1)
var n2 = new LinkNode(2)
var n3 = new LinkNode(3)
var n4 = new LinkNode(4)
var n5 = new LinkNode(5)

//建立链表
root.next=n2
n2.next=n3
n3.next=n4
n4.next=n5
n5.next=null

//遍历链表
function RecursiveTraverseLink(node){
    node!=null?(console.log(node.data),RecursiveTraverseLink(node.next)):null
}

//第一次复习逆置链表算法
//法1
/**
 * @param {node} node1 -the first node in a list 
 * @returns {node} -the last node in a original list 
 */
function ReverseLinkList(root){
    // var preNode=null 
    // var nextNode=null 
    // var temp=root 
    // while(true){  //循环遍历每个结点，改变每个结点的指向
    //     if(temp!=null){  //非空结点
    //         nextNode=temp.next  //先拿当前结点的next
    //         temp.next=preNode   //再改变当前结点的next
    //         preNode=temp        //preNode保存当前结点 
    //         temp=nextNode      //循环到下一个结点
    //     }else return preNode 
    // }
    
    //递归法
    if(root.next.next==null){   //找到倒数第二个结点，改变指向
        root.next.next=root  // n1-->n2-->n3-->n4-->n5
        return root.next
    }else{
        var result = ReverseLinkList(root.next)   //到n3就停止，掉n4改变n5.next指向并返回n5
        root.next.next = root //改变下个结点next指向为自己
        root.next = null
        return result
    }

}

console.log('顺序链表-------------------')
RecursiveTraverseLink(root)
console.log('逆置链表-------------------')
RecursiveTraverseLink(ReverseLinkList(root))