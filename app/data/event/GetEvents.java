import java.io.*;
import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;
import org.json.*;

public class GetEvents
{
    public static void main(String args[])
    {
        try
        {
            Path walkPath = Paths.get("./");

            PathMatcher jsonFilter =  walkPath.getFileSystem().getPathMatcher("regex:.+[\\d]+\\.json");
            List<Path> files = Files.walk(walkPath)
                            .filter(Files::isRegularFile)
                            .filter(jsonFilter::matches)
                            .collect(Collectors.toCollection(ArrayList::new));

            JSONArray json = new JSONArray();
            files.forEach( file -> {
                try
                {
                    json.put(Files.newBufferedReader(file).lines().collect(Collectors.joining(System.lineSeparator())));
                }
                catch (IOException e) {e.printStackTrace();}
            });

            System.out.println(json.toString(3));
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
    }
}
