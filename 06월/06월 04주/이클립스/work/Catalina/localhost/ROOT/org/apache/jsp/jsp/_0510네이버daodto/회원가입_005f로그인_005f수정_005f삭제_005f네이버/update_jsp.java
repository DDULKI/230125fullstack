/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.73
 * Generated at: 2023-05-11 01:59:59 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.jsp._0510네이버daodto.회원가입_005f로그인_005f수정_005f삭제_005f네이버;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import gaib.GaibDAO;
import gaib.GaibDTO;

public final class update_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("gaib.GaibDAO");
    _jspx_imports_classes.add("gaib.GaibDTO");
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("<head>\n");
      out.write("    <meta charset=\"UTF-8\">\n");
      out.write("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
      out.write("    <title>네이버 수정</title>\n");
      out.write("    <link rel=\"stylesheet\" href=\"./css/style.css\">\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("    <div id=\"wrap\">\n");
      out.write("\n");
      out.write("        ");

            String loginId = null;
            if(session.getAttribute("id") !=null){
                loginId = (String)session.getAttribute("id");
            }
        
      out.write("\n");
      out.write("\n");
      out.write("        ");

            GaibDAO gaibDAO = new GaibDAO();
            GaibDTO gaibDTO = gaibDAO.getJoin(loginId);
        
      out.write("\n");
      out.write("\n");
      out.write("        <div class=\"title\">\n");
      out.write("            <a href=\"http://www.naver.com\"></a>\n");
      out.write("        </div>\n");
      out.write("        <form name=\"sign_up\" id=\"signUp\" method=\"post\" action=\"./update_action.jsp\">\n");
      out.write("            <label for=\"id\">아이디</label>\n");
      out.write("            <div>\n");
      out.write("                ");
      out.print(gaibDTO.getId());
      out.write("\n");
      out.write("                <input class=\"hide\" type=\"text\" name=\"id\" id=\"id\" value=\"");
      out.print(gaibDTO.getId());
      out.write("\">\n");
      out.write("                <span>@naver.com</span>\n");
      out.write("            </div>\n");
      out.write("            <label for=\"pw\">비밀번호</label>\n");
      out.write("            <div>\n");
      out.write("                <input type=\"text\" name=\"pw\" id=\"pw\" value=\"");
      out.print(gaibDTO.getPw());
      out.write("\">\n");
      out.write("            </div>\n");
      out.write("            <label for=\"pw2\">비밀번호 확인</label>\n");
      out.write("            <div>\n");
      out.write("                <input type=\"text\" name=\"pw2\" id=\"pw2\" value=\"");
      out.print(gaibDTO.getPw());
      out.write("\">\n");
      out.write("            </div>\n");
      out.write("            <label for=\"name\">이름</label>\n");
      out.write("            <div>\n");
      out.write("                <input type=\"text\" name=\"name\" id=\"name\" value=\"");
      out.print(gaibDTO.getName());
      out.write("\">\n");
      out.write("            </div>\n");
      out.write("            <label for=\"birth_year\">생년월일</label>\n");
      out.write("            <span>\n");
      out.write("                <div class=\"birth\">\n");
      out.write("                    <input class=\"year\" type=\"text\" name=\"birth\" id=\"birthYear\" placeholder=\"년(4자)\" value=\"");
      out.print(gaibDTO.getBirth());
      out.write("\">\n");
      out.write("                </div>\n");
      out.write("                <div class=\"birth\">\n");
      out.write("                    <select class=\"month\" name=\"birth\" id=\"birthMonth\">\n");
      out.write("                        <option value=\"월\">월</option>\n");
      out.write("                        <option value=\"1\">1</option>\n");
      out.write("                        <option value=\"2\">2</option>\n");
      out.write("                        <option value=\"3\">3</option>\n");
      out.write("                        <option value=\"4\">4</option>\n");
      out.write("                        <option value=\"5\">5</option>\n");
      out.write("                        <option value=\"6\">6</option>\n");
      out.write("                        <option value=\"7\">7</option>\n");
      out.write("                        <option value=\"8\">8</option>\n");
      out.write("                        <option value=\"9\">9</option>\n");
      out.write("                        <option value=\"10\">10</option>\n");
      out.write("                        <option value=\"11\">11</option>\n");
      out.write("                        <option value=\"12\">12</option>\n");
      out.write("                    </select>\n");
      out.write("                </div>\n");
      out.write("                <div class=\"birth\">\n");
      out.write("                    <input class=\"day\" type=\"text\" name=\"birth\" id=\"birthDay\" placeholder=\"일\">\n");
      out.write("                </div>\n");
      out.write("            </span>\n");
      out.write("            <label for=\"gender\">성별</label>\n");
      out.write("            <div>\n");
      out.write("                <select name=\"gender\" id=\"Gender\">\n");
      out.write("                    <option value=\"성별\">성별</option>\n");
      out.write("                    <option value=\"남자\" ");
 if(gaibDTO.getGender().equals("남자")) {
      out.write(" checked=\"checked\"");
}
      out.write("> 남자</option>\n");
      out.write("                    <option value=\"여자\" ");
 if(gaibDTO.getGender().equals("여자")) {
      out.write(" checked=\"checked\"");
}
      out.write("> 여자</option>\n");
      out.write("                    <option value=\"선택안함\" ");
 if(gaibDTO.getGender().equals("선택안함")){ 
      out.write(" checked=\"checked\"");
}
      out.write(">선택안함</option>\n");
      out.write("                </select>\n");
      out.write("            </div>\n");
      out.write("            <label for=\"email\">본인 확인 이메일<span>(선택)</span></label>\n");
      out.write("            <div>\n");
      out.write("                <input type=\"text\" name=\"email\" id=\"Email\" placeholder=\"선택 입력\" value=\"");
      out.print(gaibDTO.getEmail());
      out.write("\">\n");
      out.write("            </div>\n");
      out.write("            <label for=\"hp\">휴대전화</label>\n");
      out.write("            <div>\n");
      out.write("                <select name=\"nation\" id=\"nation\">\n");
      out.write("                    <option ");
 if(gaibDTO.getNation().equals("대한민국 +82")){ 
      out.write(" checked=\"checked\" ");
}
      out.write(" value=\"대한민국 +82\">대한민국 +82</option>\n");
      out.write("                    <option ");
 if(gaibDTO.getNation().equals("그리스 +30")){ 
      out.write(" checked=\"checked\" ");
}
      out.write(" value=\"그리스 +30\">그리스 +30</option>\n");
      out.write("                    <option ");
 if(gaibDTO.getNation().equals("나이지리아 +234")){ 
      out.write(" checked=\"checked\" ");
}
      out.write(" value=\"나이지리아 +234\">나이지리아 +234</option>\n");
      out.write("                    <option ");
 if(gaibDTO.getNation().equals("노르웨이 +47")) { 
      out.write(" checked=\"checked\" ");
}
      out.write("value=\"노르웨이 +47\">노르웨이 +47</option>\n");
      out.write("                    <option ");
 if(gaibDTO.getNation().equals("독일 +49")) { 
      out.write(" checked=\"checked\" ");
}
      out.write(" value=\"독일 +49\">독일 +49</option>\n");
      out.write("                </select>\n");
      out.write("            </div>\n");
      out.write("            <label for=\"hp\"></label>\n");
      out.write("            <div class=\"hp\">\n");
      out.write("                <input type=\"text\" class=\"hp\" name=\"hp\" id=\"hp\" placeholder=\"전화번호 입력\" value=\"");
      out.print(gaibDTO.getHp());
      out.write("\">\n");
      out.write("                <button class=\"certification\">인증번호 받기</button>\n");
      out.write("            </div>\n");
      out.write("            <button class=\"signup\" type=\"submit\">수정하기</button>\n");
      out.write("        </form>\n");
      out.write("    </div>\n");
      out.write("    \n");
      out.write("</body>\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
