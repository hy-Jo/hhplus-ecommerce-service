-- Insert 5 users
INSERT INTO User (username, email, password_hash, balance, created_at, updated_at) VALUES 
('alice', 'alice@example.com', 'hashed_password_1', 100.00, NOW(), NOW()),
('bob', 'bob@example.com', 'hashed_password_2', 200.00, NOW(), NOW()),
('charlie', 'charlie@example.com', 'hashed_password_3', 300.00, NOW(), NOW()),
('david', 'david@example.com', 'hashed_password_4', 400.00, NOW(), NOW()),
('eve', 'eve@example.com', 'hashed_password_5', 500.00, NOW(), NOW());

-- Insert 5 balance transactions
INSERT INTO BalanceTransaction (user_id, amount, status, description, created_at) VALUES 
(1, 50.00, 'DEPOSIT', 'Initial deposit', NOW()),
(2, 100.00, 'USED', 'Purchase', NOW() - INTERVAL 1 DAY),
(3, 150.00, 'DEPOSIT', 'Refund', NOW() - INTERVAL 2 DAY),
(4, 200.00, 'USED', 'Purchase', NOW() - INTERVAL 3 DAY),
(5, 250.00, 'DEPOSIT', 'Initial deposit', NOW() - INTERVAL 4 DAY);

-- Insert 5 products
INSERT INTO Product (name, price, stock_quantity, created_at, updated_at) VALUES 
('Product 1', 10.00, 100, NOW(), NOW()),
('Product 2', 20.00, 200, NOW(), NOW()),
('Product 3', 30.00, 300, NOW(), NOW()),
('Product 4', 40.00, 400, NOW(), NOW()),
('Product 5', 50.00, 500, NOW(), NOW());

-- Insert 5 orders
INSERT INTO Order (user_id, user_coupon_id, origin_amount, discount_amount, final_amount, status, created_at) VALUES 
(1, NULL, 100.00, 10.00, 90.00, 'PENDING', NOW()),
(2, NULL, 200.00, 20.00, 180.00, 'PROCESSING', NOW() - INTERVAL 1 DAY),
(3, NULL, 300.00, 30.00, 270.00, 'COMPLETED', NOW() - INTERVAL 2 DAY),
(4, NULL, 400.00, 40.00, 360.00, 'CANCELLED', NOW() - INTERVAL 3 DAY),
(5, NULL, 500.00, 50.00, 450.00, 'REFUNDED', NOW() - INTERVAL 4 DAY);

-- Insert 5 order items
INSERT INTO OrderItem (order_id, product_id, quantity, price_at_order) VALUES 
(1, 1, 2, 10.00),
(2, 2, 1, 20.00),
(3, 3, 3, 30.00),
(4, 4, 4, 40.00),
(5, 5, 5, 50.00);

-- Insert 5 coupons
INSERT INTO Coupon (code, discount_amount, valid_from, valid_to, total_quantity, remaining_quantity) VALUES 
('DISCOUNT10', 10.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), 100, 100),
('DISCOUNT20', 20.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), 50, 50),
('DISCOUNT30', 30.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), 30, 30),
('DISCOUNT40', 40.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), 20, 20),
('DISCOUNT50', 50.00, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), 10, 10);

-- Insert 5 user coupons
INSERT INTO UserCoupon (user_id, coupon_id, status, issued_at, used_at) VALUES 
(1, 1, 'UNUSED', NOW(), NULL),
(2, 2, 'USED', NOW() - INTERVAL 1 DAY, NOW()),
(3, 3, 'EXPIRED', NOW() - INTERVAL 2 DAY, NULL),
(4, 4, 'UNUSED', NOW() - INTERVAL 3 DAY, NULL),
(5, 5, 'USED', NOW() - INTERVAL 4 DAY, NOW());

-- Insert 5 popular products
INSERT INTO PopularProduct (product_id, sales_count, sales_date) VALUES 
(1, 10, NOW()),
(2, 20, NOW() - INTERVAL 1 DAY),
(3, 30, NOW() - INTERVAL 2 DAY),
(4, 40, NOW() - INTERVAL 3 DAY),
(5, 50, NOW() - INTERVAL 4 DAY);

-- Insert 5 payments
INSERT INTO Payment (order_id, amount, payment_method, status, created_at) VALUES 
(1, 90.00, 'CREDIT_CARD', 'PENDING', NOW()),
(2, 180.00, 'PAYPAL', 'COMPLETED', NOW() - INTERVAL 1 DAY),
(3, 270.00, 'CREDIT_CARD', 'FAILED', NOW() - INTERVAL 2 DAY),
(4, 360.00, 'PAYPAL', 'REFUNDED', NOW() - INTERVAL 3 DAY),
(5, 450.00, 'CREDIT_CARD', 'COMPLETED', NOW() - INTERVAL 4 DAY);