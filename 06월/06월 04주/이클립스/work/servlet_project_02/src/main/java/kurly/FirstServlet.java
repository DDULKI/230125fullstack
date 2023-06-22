package kurly;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlete("/ddulki.do")
public class FirstServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doGet 입니다.");
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("doPost 입니다.");
	}

	@Override
	public void destroy() {
		System.out.println("destroy 입니다.");		
	}

	@Override
	public void init() throws ServletException {
		System.out.println("init 입니다.");		
	}

}
