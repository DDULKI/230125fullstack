# 문자열 처리 함수 

# python = "Python is Amazing"

# print(python.lower())
# print(python.upper())
# print(python[0].isupper()) 
# print(len(python)) # 문자 길이 
# print(python.replace("Python", "Java")) # 파이썬 이름을 자바로 바꿔줘라. 

# index = python.index("n")
# print(index)
# index = python.index("n", index + 1)
# print(index)

# # print(python.find("Java"))
# # print(python.index("Java"))
# print("hi") 
# print(python.count("n")) # 이 단어에 n이 몇번 나오니 ? 


# 문자열 포맷 
# print("a" + "b")
# print("a", "b")

# 방법 1 
# print("나는 %d살입니다." %10)
# print("나는 %s을 좋아해요." %"파이썬")
# print("Apple 은 %c로 시작해요" %"A") # 한글 자만 받는다 char 

# #%s
# print("나는 %s살입니다." %234)
# print("나는 %s색과 %s색을 좋아해요. " %("파란", "빨간"))

# 방법2 
# print("나는 {}살입니다. " .format(20))
# print("나는 {}색과 {}색을 좋아해요." .format("흥", "항"))
# print("나는 {0}색과 {1}색을 좋아해요." .format("흥", "항"))
# print("나는 {1}색과 {0}색을 좋아해요." .format("흥", "항"))

#  방법 3 
# print ("나는 {age}살이며, {color}색을 좋아해요. " .format(age = 20, color="빨간"))
# print ("나는 {age}살이며, {color}색을 좋아해요. " .format( color="빨간", age = 20))

# 방법 4 (v3.6 이상~ )
# age = 20 
# color = "빨간"
# print(f"나는 {age}살이며, {color}색을 좋아해요.")




# 탈출 문자 
# \n : 줄바뀜 
# print("백문이 불여일견 \n백견이 불여일타")


# \" \' : 문장 내에서 따옴표 
# 저는 "나도코딩" 입니다. 
# print("저는 '나도코딩' 입니다")
# print('저는 "나도코딩" 입니다')
# print("저는 \"나도코딩\"입니다.")
# print("저는 \'나도코딩\'입니다.")

# # \\ : 문장 내에서 \ 
# print("\\Users\\seulki\\Desktop\\pythonworkspace\\0924.py ")

# \r : 커서를 맨 앞으로 이동 
# print("Red Apple\rPine")

# \b : 백스페이스 (한 글자 삭제)
# print("Redd\bApple")

# # \t : 탭 
# print("Red\tApple")

'''
Quiz ) 사이트별로 비밀번호를 만들어 주는 프로그램을 작성하시오 

예) http://naver.com
규칙1 : http:// 부분은 제외 => naver.com
규칙2 : 처음 만나는 점 (.) 이후 부분은 제외 => naver 
규칙3 : 남은 글자 중 처음 세자리 + 글자 갯수 + 글자 내 'e' 갯수 + "!" 로 구성 
            (nav)               (5)         (1)         (!)
예 ) 생성된 비밀번호 : nav5!
'''

# url = "http://naver.com"
# url = "http://youtube.com"
# my_str = url.replace("http://", "") # 규칙 1 http 부분은 공백으로 수정한다. 
# print(my_str)
# my_str = my_str[:my_str.index(".")] #my_str 에 들어가있는 문자열 중에서 처음부터 my_str 처음 나오는 .의 위치 직전까지 / 규칙 2 
# print(my_str)
# password = my_str[:3] + str(len(my_str)) + str(my_str.count("e")) + "!"
# print("{0}의 비밀번호는 {1} 입니다. " .format(url, password))


# 리스트 [] 

# 지하철 칸별로 10명, 20명 
# subway1 = 10
# subway2 = 20
# subway3 = 30

# subway = [10,20,30]
# print(subway)

# subway = ["유재석", "조세호", "박명수"]
# print(subway)

# 조세호씨가 몇 번째 칸에 타고 있는가? 
# print(subway.index("조세호"))

# # 하하씨가 다음 정류장에서 다음 칸에 탐 
# subway.append("하하")
# print(subway)

# # 정형돈씨를 유재석 / 조세호 사이에 태워봄 
# subway.insert(1, "정형돈")
# print(subway)

# # 지하철에 있는 사람을 한 명씩 뒤에서 꺼냄
# print(subway.pop())
# print(subway)

# # 같은 이름의 사람이 몇 명 있는지 확인 
# subway.append("유재석")
# print(subway)
# print(subway.count("유재석"))

# 정렬도 가능 
# num_list = [5,2,7,3,2]
# num_list.sort()
# print(num_list)

# # 순서 뒤집기 가능 
# num_list.reverse()
# print(num_list)

# # 모두 지우기 
# num_list.clear()
# print(num_list)


# 다양한 자료형 함께 사용 
# mix_list = ["조세호", 20, True]
# num_list = [5,2,7,3,2]
# print(mix_list)

# # 리스트 확장 
# num_list.extend(mix_list)
# print(num_list)



