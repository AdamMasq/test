#include <stdio.h>
int main()
{
    short int a, b;
    while(scanf("%hd %hd", &a, &b)==2) 
        printf("%hd\n", a+b);
    return 0;
}

// 注意scanf的返回值问题