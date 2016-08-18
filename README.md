# Ontlas

Ontlas is an ontology-driven SKOS-based atlas.

This project is however a proof-of-concept for a bigger knowledge engineering issue,
and yet a playground so I can experiment and learn new technologies (mainly new OWL-API, Vert.x and React).


# Instruction

Here are simple steps for non-technical enthusiasts to compile Ontlas, deploy and execute the jar file from from source codes:

- Install Maven or Gradle! Described below you find out how to build Ontlas by Maven, but gradle works similarly.
- Change current directory to the root directory of the project, where `pom.xml` fiel exists.
- Run the following command inside the project directory: `mvn clean install compile package`.
- If it builds successfully, there must be an `ontlas-<version>-fat.jar` file inside `target/` directory (e.g. `target/ontlas-0.0.1-fat.jar`).
  This file encapsulates all dependencies and resources into a single jar file; ready to be deployed. 
- Run this file simply by `java -jar <jar_file_path>`, then go to the `http://localhost:8080` in your browser.
- You can also pass a configuration file with `-conf` argument when executing the jar file (e.g. to set a custom port).


# Contributors

- [Morteza Ansarinia](http://github.com/morteza)

# License

```
MIT License

Copyright (c) 2016 Morteza Ansarinia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
