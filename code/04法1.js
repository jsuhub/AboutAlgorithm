// 定义链表节点类
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 定义函数用于判断链表是否相交
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

    let lengthA = getLength(headA);
    let lengthB = getLength(headB);

    // 将长链表的指针向前移动到与短链表相同长度的位置
    while (lengthA > lengthB) {
        headA = headA.next;
        lengthA--;
    }
    while (lengthB > lengthA) {
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

// 构建链表A：4->1->8->4->5
const intersect = new ListNode(8, new ListNode(4, new ListNode(5)));
const headA = new ListNode(4, new ListNode(1, intersect));

// 构建链表B：5->6->1->8->4->5
const headB = new ListNode(5, new ListNode(6, new ListNode(1, intersect)));


const intersectionNode = getIntersectionNode(headA, headB);
if (intersectionNode) {
    console.log("两个链表相交，相交节点的值为:", intersectionNode.val);
} else {
    console.log("两个链表不相交");
}

function RecursiveTraverseLinkList(root){
    if(root!=null){
        console.log(root.val)
        RecursiveTraverseLinkList(root.next)
    }else return 
}




