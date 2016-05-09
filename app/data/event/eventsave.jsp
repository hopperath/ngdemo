<%@page import="java.io.*"%>
<%@page import="java.util.stream.Collectors"%>
<%@page import="org.json.JSONObject"%>
<%
//File creation

String output = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));

JSONObject json = new JSONObject(output);

out.println(output);
out.println(json.getInt("id"));

File myFile = new File(String.format("./webapps/%s/app/data/event/%s.json",request.getContextPath(),json.getInt("id")));
Writer writer = new BufferedWriter(new FileWriter(myFile));
writer.write(output);
writer.close();

//out.println(request.getServletPath());
//out.println(request.getContextPath());

%>
