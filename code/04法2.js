//创建结点结构和链表
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// const intersect = new ListNode(8, new ListNode(4, new ListNode(5)));

// // 构建链表A：4->1->8->4->5
// const headA = new ListNode(4, new ListNode(1, intersect));

// // 构建链表B：5->6->1->8->4->5
// const headB = new ListNode(5, new ListNode(6, new ListNode(1, intersect)));

const intersect = new ListNode(8, new ListNode(4, new ListNode(5)));

// 构建链表A：4->1->8->4->5
const headA = new ListNode(4, new ListNode(1));

// 构建链表B：5->6->1->8->4->5
const headB = new ListNode(5, new ListNode(6, new ListNode(1)));





//寻找相交结点算法
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {   //两条链表依次循环对照，一直到循环完返回null，null=null所以可以跳出循环
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};


getIntersectionNode(headA,headB)?console.log('相交结点的值为：',getIntersectionNode(headA,headB).val):console.log(null)

