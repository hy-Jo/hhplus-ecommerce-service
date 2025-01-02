# 시나리오 E-Commerce Service

## 작업 계획 (Milestone)
![image](https://github.com/user-attachments/assets/dd247372-7f7f-4e11-9ca7-4d9f2a545f17)
https://docs.google.com/spreadsheets/d/15VuPwXB8JitZtk5T2-KGmRT9AV95vOvN-UFheYKM8Ak/edit?gid=0#gid=0

## 주요 기능
- 사용자 잔액 충전 및 조회 (동시성 처리)
- 상품 목록 조회 및 재고 관리
- 선착순 쿠폰 발급 시스템
- 주문 생성 및 결제 처리
- 인기 상품 추천 (최근 3일간 가장 많이 팔린 상위 5개 상품)

 ## ERD 설계
 ### Users
- 사용자 정보를 저장하는 테이블
- 사용자의 기본 정보와 잔액 정보를 관리
- 잔액은 결제에 사용되는 금액으로, 충전 및 사용 가능

### Balance Transactions
- 사용자의 잔액 변동 내역을 기록하는 테이블
- 충전, 결제, 환불 등 모든 금액 변동 이력을 추적
- transaction_type으로 거래 유형을 구분

### Orders
- 주문 정보를 저장하는 테이블
- 주문의 총 금액, 할인 금액, 최종 결제 금액을 관리
- 주문 상태(status)는 다음과 같이 관리:
  - PENDING: 주문 접수, 결제 대기
  - PROCESSING: 결제 완료, 주문 처리 중
  - COMPLETED: 주문 완료
  - CANCELLED: 주문 취소
  - REFUNDED: 환불 처리됨

### Order Items
- 주문에 포함된 상품 정보를 저장하는 테이블
- 주문 시점의 상품 가격을 별도로 저장하여 이력 관리
- 주문 수량과 개별 상품 가격 정보를 포함

### Products
- 상품 정보를 저장하는 테이블
- 상품의 이름, 가격, 재고 수량을 관리
- 재고 관리를 위한 stock_quantity 필드 포함

### Coupons
- 쿠폰 정보를 저장하는 테이블
- 쿠폰의 할인 금액, 유효 기간을 관리
- 총 수량과 남은 수량을 통해 선착순 쿠폰 발급 관리

### User Coupons
- 사용자별 보유 쿠폰 정보를 저장하는 테이블
- 쿠폰 발급 시점과 사용 시점을 기록
- is_used 필드로 쿠폰 사용 여부를 관리

### Payments
- 결제 정보를 저장하는 테이블
- 결제 방법과 결제 상태를 관리
- 결제 상태(status)는 다음과 같이 관리:
  - PENDING: 결제 대기 중
  - COMPLETED: 결제 완료
  - FAILED: 결제 실패
  - REFUNDED: 환불 처리됨
