import java.io.*;
import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;

public class MyTest
{
    public static void main(String args[])
    {
        try
        {
            List<String> files = Files.walk(Paths.get("./"))
                                    .filter(Files::isRegularFile)
                                    .map(Path::toFile)
                                    .map(File::getName)
                                    .collect(Collectors.toCollection(ArrayList::new));

            System.out.println(files);
        }
        catch (IOException e) {}
    }
}
