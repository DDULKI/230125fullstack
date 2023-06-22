package kurly;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/R") // 어노테이션 맵핑 주소
public class Firstservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	int cnt =0;

	public void init(ServletConfig config) throws ServletException {
		cnt ++;
		System.out.println("init 메서드 입니다.");
	}

	public void destroy() {
		cnt ++;
		System.out.println("destroy 메서드 입니다.");
	}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		cnt ++;
		System.out.println("doGet 메서드 입니다." +cnt );
	}


}
