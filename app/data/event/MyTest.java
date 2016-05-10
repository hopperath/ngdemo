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
            Path walkPath = Paths.get("./");

            PathMatcher jsonFilter =  walkPath.getFileSystem().getPathMatcher("regex:.+[\\d]+\\.json");
            List<String> files = Files.walk(walkPath)
                                    .filter(Files::isRegularFile)
                                    .filter(jsonFilter::matches)
                                    .map(Path::toFile)
                                    .map(File::getName)
                                    .collect(Collectors.toCollection(ArrayList::new));


            List<String> numbers = files.stream().map( k->k.substring(0,k.indexOf('.'))).collect(Collectors.toList());
            Integer maxnum = files.stream().map( k->Integer.parseInt(k.substring(0,k.indexOf('.')))).max(Integer::compare).get();

            Collections.sort(numbers);

            System.out.println(maxnum);
            //System.out.println(realnums.stream().max(Integer::compare).get());
            System.out.println(numbers);
            System.out.println(files);
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
    }
}
