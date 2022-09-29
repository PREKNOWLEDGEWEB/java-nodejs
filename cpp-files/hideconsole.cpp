#include <iostream>
#include <Windows.h>

using namespace std;

void HideConsole()
{
    ::ShowWindow(::GetConsoleWindow(), SW_SHOW);
}

int main(int argc, char *argv[])
{
    HideConsole();
    return 0;
}