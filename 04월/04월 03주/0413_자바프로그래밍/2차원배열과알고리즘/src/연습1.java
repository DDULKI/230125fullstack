public class 연습1 {
    public static void main(String[] args) {
        int[] arr = new int[5];

        // 배열 arr에 1~5를 저장한다. 
        for(int i = 0; i < arr.length; i++){
            arr[i] += 1;
        }
            System.out.println("[변경전]");
            System.out.println("arr.length:" + arr.length);
            for (int i=0; i<arr.length; i++){
                System.out.println("arr["+i+"]:" + arr[i]);
            }
        int[] tmp = new int[arr.length * 2 ];
        for(int i=0; i<arr.length; i++){
            tmp[i]=arr[i];
        }

        arr=tmp;

        System.out.println("[변경후1]");
        System.out.println("arr.length:" + arr.length);
        for (int i =0; i< arr.length; i++){
            System.out.println("arr["+i+"]:"+ arr[i]);
        }
         
        tmp = new int[arr.length *3];
        for(int i=0; i<arr.length; i++){
            tmp[i]=arr[i];
        }

        arr =tmp;
        
        System.out.println("[변경후2]");
        System.out.println("arr.length:"+arr.length);
        for (int i =0; i<arr.length; i++){
            System.out.println("arr["+i+"]:"+ arr[i]);
        }
       
    }    
}
