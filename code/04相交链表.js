//定义结点结构
function ListNode(val){
    this.val = val
    this.next = null
}

//创建结点
var root1 = new ListNode(4)
var fn2 = new ListNode(1)
var fn3 = new ListNode(8)
var fn4 = new ListNode(4)
var fn5 = new ListNode(5)

var root2 = new ListNode(5)
var sn2 = new ListNode(6)
var sn3 = new ListNode(1)
var sn4 = new ListNode(8)
var sn5 = new ListNode(4)
var sn6 = new ListNode(5)

//创建两条链表
root1.next = fn2
fn2.next = fn3
fn3.next = fn4
fn4.next = fn5
fn5.next = null

root2.next = sn2
sn2.next = sn3
sn3.next = sn4
sn4.next = sn5
sn5.next = sn6
sn6.next = null

//递归遍历链表
function RecursiveTraverseLinkList(root){
    if(root!=null){
        console.log(root.val)
        RecursiveTraverseLinkList(root.next)
    }else return 
}

//查找相交链表
/**
 * @param {root} root1 链表1的头节点
 * @param {root} root2 链表2的头节点
 */
function findIntersectingNode(root1,root2){
    //思路：
    //相交的定义：两条链表相交的特点就是从某个位置开始，两条链表后面所有的结点都相等
    //1.逆置两条链表？然后依次对比找到结点不相同的位置
    flroot = ReverseLinkList(root1)
    slroot = ReverseLinkList(root2)
    var intersectionNode=flroot //刚开始为尾结点
    if(flroot.val === slroot.val){  //说明两链表相交
        while(true){
            if(flroot.val!=slroot.val){   //直到某个位置不相同了
                return intersectionNode.val
            }
            intersectionNode = flroot  //每次相同，就记录下该位置
            flroot=flroot.next  //指向下一个
            slroot=slroot.next
        }
    }else return null   //说明两链表不相交
    
}

function ReverseLinkList(root){
    var preNode=null
    var nextNode=null
    var temp=root
    while(true){
        if(temp!=null){
            nextNode = temp.next  
            temp.next = preNode
            preNode = temp
            temp = nextNode
        }else return preNode
    }
}


function getIntersectionNode(headA, headB) {
    // 计算链表长度
    const getLength = (node) => {
        let length = 0;
        while (node) {
            length++;
            node = node.next;
        }
        return length;
    };

    let lengthA = getLength(headA);   //lengthA为A链表长度
    let lengthB = getLength(headB);   //lengthB为B链表长度

    // 将长链表的指针向前移动到与短链表相同长度的位置
    while (lengthA > lengthB) {  //A长A移动 
        headA = headA.next;
        lengthA--;
    }
    while (lengthB > lengthA) {  //B长B移动
        headB = headB.next;
        lengthB--;
    }

    // 同时遍历两个链表，找到相交节点或到达链表末尾
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    // 返回相交节点或null
    return headA;

}

// 示例
// 构建两个相交的链表
// const intersect = new ListNode(8, new ListNode(4, new ListNode(5)));
// const headA = new ListNode(4, new ListNode(1, intersect));
// const headB = new ListNode(5, new ListNode(6, new ListNode(1, intersect)));

// 找出相交节点
// const intersectionNode = getIntersectionNode(root1, root2);
// if (intersectionNode) {
//     console.log("相交节点的值为:", intersectionNode.val);
// } else {
//     console.log("两个链表不相交");
// }


console.log(getIntersectionNode(root1, root2));


