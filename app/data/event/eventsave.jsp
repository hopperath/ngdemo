<%@page import="java.io.*"%>
<%@page import="java.nio.file.*"%>
<%@page import="java.util.stream.Collectors"%>
<%@page import="java.util.*"%>
<%@page import="org.json.JSONObject"%>
<%@page import="java.io.IOException"%>
<%@page import="java.util.stream.*"%>
<%
//File creation

String output = (String) request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));

JSONObject json = new JSONObject(output);

out.println(output);

int id = json.getInt("id");
out.println("id="+id);

if (id<0)
{
    try
    {
        List<String> files = Files.walk(Paths.get("/Users/v409647/webapps/ngdemo/app/data/event"))
                                .filter(Files::isRegularFile)
                                .map(Path::toFile)
                                .map(File::getName)
                                .collect(Collectors.toCollection(ArrayList::new));

        out.println(files);
        out.println(request.getServletPath());
        out.println(request.getRealPath(request.getServletPath()));
    }
    catch (IOException e) {e.printStackTrace();}
    /*
    List<File> files = Files.walk(Paths.get("."))
                            .filter(Files::isRegularFile)
                            .map(Path::toFile)
                            .collect(Collectors.toList());
                            */

    //out.println(files);
}
/*
File myFile = new File(String.format("./webapps/%s/app/data/event/%d.json",request.getContextPath(),id));
Writer writer = new BufferedWriter(new FileWriter(myFile));
writer.write(output);
writer.close();
*/

//out.println(request.getServletPath());
//out.println(request.getContextPath());

%>
