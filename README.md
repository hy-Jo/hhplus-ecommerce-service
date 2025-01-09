# 시나리오 E-Commerce Service

## 주요 기능
- 사용자 잔액 충전 및 조회 (동시성 처리)
- 상품 목록 조회 및 재고 관리
- 선착순 쿠폰 발급 시스템
- 주문 생성 및 결제 처리
- 인기 상품 추천 (최근 3일간 가장 많이 팔린 상위 5개 상품)

 ## ERD 설계
![image](https://github.com/user-attachments/assets/71088f38-f661-4891-af77-a90f7107ba54)
https://dbdiagram.io/d/%EC%9D%B4%EC%BB%A4%EB%A8%B8%EC%8A%A4ERD_HY-67751bc95406798ef708c5a3

## API 명세
![image](https://github.com/user-attachments/assets/b15f565c-7db3-4d2c-8308-758384c471bf)

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
