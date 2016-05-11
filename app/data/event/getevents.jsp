<%@page import="java.io.*"%>
<%@page import="java.nio.file.*"%>
<%@page import="java.util.stream.Collectors"%>
<%@page import="java.util.*"%>
<%@page import="org.json.*"%>
<%@page import="java.io.IOException"%>
<%@page import="java.util.stream.*"%>
<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%


try
{
    File path = new File(request.getRealPath(request.getServletPath()));
    Path walkPath = Paths.get(path.getParent());


    PathMatcher jsonFilter =  walkPath.getFileSystem().getPathMatcher("regex:.+[\\d]+\\.json");
    List<Path> files = Files.walk(walkPath)
                            .filter(Files::isRegularFile)
                            .filter(jsonFilter::matches)
                            .collect(Collectors.toCollection(ArrayList::new));
    JSONArray json = new JSONArray();
    files.forEach( file -> {
        try
        {
            json.put(new JSONObject(Files.newBufferedReader(file).lines().collect(Collectors.joining())));
        }
        catch (IOException e) {e.printStackTrace();}
    });

    out.println(json.toString(3));
}
catch (IOException e) {e.printStackTrace();}

%>
