<%@page import="java.io.*"%>
<%@page import="java.nio.file.*"%>
<%@page import="java.util.stream.Collectors"%>
<%@page import="java.util.*"%>
<%@page import="org.json.*"%>
<%@page import="java.io.IOException"%>
<%@page import="java.util.stream.*"%>
<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%
//File creation

String output = (String) request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));

JSONObject json = new JSONObject(output);

//out.println(output);

int id=-1;

try
{
    id = json.getInt("id");
}
catch (JSONException e) { }

//out.println("context:"+request.getContextPath());
//out.println("servet:"+request.getServletPath());
//out.println("real:"+request.getRealPath(request.getServletPath()));

//out.println("parent:"+path.getParent());

if (id<0)
{
    try
    {
        File path = new File(request.getRealPath(request.getServletPath()));
        Path walkPath = Paths.get(path.getParent());


        PathMatcher jsonFilter =  walkPath.getFileSystem().getPathMatcher("regex:.+[\\d]+\\.json");
        List<String> files = Files.walk(walkPath)
                                .filter(Files::isRegularFile)
                                .filter(jsonFilter::matches)
                                .map(Path::toFile)
                                .map(File::getName)
                                .collect(Collectors.toCollection(ArrayList::new));


        List<String> numbers = files.stream().map( k->k.substring(0,k.indexOf('.'))).collect(Collectors.toList());
        Integer nextnum = files.stream().map( k->Integer.parseInt(k.substring(0,k.indexOf('.')))).max(Integer::compare).get()+1;


        id=nextnum;
        json.put("id",id);

    }
    catch (IOException e) {e.printStackTrace();}
}

File myFile = new File(String.format("./webapps/%s/app/data/event/%d.json",request.getContextPath(),id));
Writer writer = new BufferedWriter(new FileWriter(myFile));
writer.write(json.toString(3));
writer.close();
out.println(String.format("{\"id\":%d}",id));



/*
File myFile = new File(String.format("./webapps/%s/app/data/event/%d.json",request.getContextPath(),id));
Writer writer = new BufferedWriter(new FileWriter(myFile));
writer.write(output);
writer.close();
*/

//out.println(request.getServletPath());
//out.println(request.getContextPath());

%>
