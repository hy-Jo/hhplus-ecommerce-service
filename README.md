# 시나리오 E-Commerce Service

 ## ERD 설계
![image](https://github.com/user-attachments/assets/ffebe572-29a1-4d27-923e-b8cb230b00d7)
https://dbdiagram.io/d/%EC%9D%B4%EC%BB%A4%EB%A8%B8%EC%8A%A4ERD_HY-67751bc95406798ef708c5a3

## API Swagger 기능
![image](https://github.com/user-attachments/assets/2cbd4fc0-12fd-4b80-a3a4-f9e801cb5bd6)
![image](https://github.com/user-attachments/assets/a42010b9-2226-47a4-98ad-a84d7b8896ec)
![image](https://github.com/user-attachments/assets/d33f68e8-80ad-4117-b932-ad14537b6b6f)


### Users
- `GET /users/:id` - 사용자 정보 조회
- `POST /users` - 사용자 생성

### Balance
- `GET /balance` - 잔액 조회
- `POST /balance/charge` - 잔액 충전
- `GET /balance/transactions` - 거래 내역 조회

### Products
- `GET /products` - 상품 목록 조회
- `GET /products/popular` - 인기 상품 조회

### Orders
- `POST /orders` - 주문 생성
- `GET /orders/:id` - 주문 상세 조회

### Payments
- `POST /payments` - 결제 처리
- `GET /payments/:id` - 결제 정보 조회

### Coupons
- `GET /coupons` - 사용 가능한 쿠폰 목록 조회
- `POST /coupons/issue` - 쿠폰 발급 (선착순)
- `GET /coupons/my` - 보유 쿠폰 목록 조회

### API 문서
상세 API 문서는 서버 실행 후 다음 경로에서 확인할 수 있습니다:
- Swagger UI: `http://localhost:3300/api-docs`
