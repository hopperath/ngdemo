
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

String id=null;

try
{
    id = json.getString("id");
}
catch (JSONException e) { }

if (id != null)
{
    File myFile = new File(String.format("./webapps/%s/app/data/profile/%s.json",request.getContextPath(),id));
    Writer writer = new BufferedWriter(new FileWriter(myFile));
    writer.write(json.toString(3));
    writer.close();
    out.println("{ \"result\": 0 }");
}
else
{
    out.println("{ \"result\": -1 }");
}

%>
