#include <stdio.h>
#include <math.h>
int main()
{
    __int64 m, n, a, ans;
    scanf("%I64d %I64d %I64d", &m, &n, &a);
    m = ceil(double(m)/a);
    n = ceil(double(n)/a);
    ans = m*n;
    printf("%I64d", ans);
    return 0;
}

/*
Note the usage of __int64
*/