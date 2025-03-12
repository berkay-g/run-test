export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    c: "10.2.0",
    cpp: "10.2.0",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0"
}

export const DEFAULT_CODE = {
    javascript: "console.log(\"Hello JS\\n\");",
    typescript: "var hello: string = \"Hello TS\\n\";\nconsole.log(hello);",
    c: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello C\\n\");\n}",
    cpp: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello C++\" << std::endl;\n}",
    python: "print(\"Hello Python\")",
    java: "import java.io.*;\nimport java.util.*;\n\nclass Code {\n    public static void main(String[] args) {\n        System.out.println(\"Hello Java\");\n    }\n}",
    csharp: "using System;\n\nclass Code {\n    static void Main() {\n        Console.WriteLine(\"Hello C#\");\n    }\n}",
}

//http://emkc.org/api/v2/piston/runtimes