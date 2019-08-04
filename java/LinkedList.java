import java.sql.Struct;
import java.util.*;
public class LinkedList {
    Node head;

    static class Node {
        int data;
        Node next;
        Node(int d){
            data = d;
            next = null;
        }
    }

    void prepend(int d){
        Node newNode = new Node(d);
        newNode.next = head;
        head = newNode;
        return;
    }

    void append(int d){
        Node newNode = new Node(d);
        if (head == null){
            head = newNode;
        }
        Node last = head;
        while(last.next != null) {
            last = last.next;
        }
        last.next = newNode;
        return;
    }

    void insertAfter(Node prevNode, int d){
        if (prevNode == null){
            System.out.println("The node passed in cannot be null");
        }
        Node newNode = new Node(d);

        newNode.next = prevNode.next;
        prevNode.next = newNode;
        return;
    }



    void print(){
        Node tempHead = head;
        while (tempHead != null){
            System.out.println(tempHead.data);
            System.out.println("---");
            tempHead = tempHead.next;
        }

        return;
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        list.head = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);
        list.head.next = second;
        second.next = third;
        System.out.println("original");
        list.print();
        System.out.println("$$$$$$");

        System.out.println("prepend 888");
        list.prepend(888);
        list.print();
        System.out.println("$$$$$$");

        System.out.println("append 555");
        list.append(555);
        list.print();
        System.out.println("$$$$$$");

        System.out.println("insert 333 after second (should be fourth)");
        list.insertAfter(second, 333);
        list.print();



    }
}
