-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2019 at 11:17 PM
-- Server version: 5.7.26-log
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myeshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `account_id` int(10) UNSIGNED NOT NULL,
  `account_type` int(10) UNSIGNED DEFAULT NULL,
  `account_number` char(10) NOT NULL,
  `password` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`account_id`, `account_type`, `account_number`, `password`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 1001, '1', 123, 1001, '2019-11-11', 1001, '2019-11-11'),
(1002, 1001, '1234', 123, 1001, '2019-11-11', 1001, '2019-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `account_type`
--

CREATE TABLE `account_type` (
  `account_type_id` int(10) UNSIGNED NOT NULL,
  `account_type` char(30) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account_type`
--

INSERT INTO `account_type` (`account_type_id`, `account_type`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'administrator', 1, '2019-11-10', 1, '2019-11-10'),
(1002, 'user', 1, '2019-11-10', 1, '2019-11-10'),
(1003, 'group', 1, '2019-11-10', 1, '2019-11-10'),
(1004, 'individual', 1, '2019-11-10', 1, '2019-11-10');

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(10) UNSIGNED NOT NULL,
  `address_type` int(10) UNSIGNED DEFAULT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `street_address` char(50) NOT NULL,
  `city_state_id` int(10) UNSIGNED NOT NULL,
  `postal_code_id` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `address_type`
--

CREATE TABLE `address_type` (
  `address_type_id` int(10) UNSIGNED NOT NULL,
  `address_type` int(10) UNSIGNED DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(10) UNSIGNED NOT NULL,
  `city` char(200) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'Bangalore', 1001, '2019-11-11', 1001, '2019-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `city_state`
--

CREATE TABLE `city_state` (
  `city_state_id` int(10) UNSIGNED NOT NULL,
  `city_id` int(10) UNSIGNED NOT NULL,
  `state_id` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city_state`
--

INSERT INTO `city_state` (`city_state_id`, `city_id`, `state_id`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 1001, 1001, 1001, '2019-11-11', 1001, '2019-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `contact_type` int(10) UNSIGNED DEFAULT NULL,
  `email` char(30) NOT NULL,
  `first_name` char(30) NOT NULL,
  `middle_name` char(30) DEFAULT NULL,
  `last_name` char(30) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact_type`
--

CREATE TABLE `contact_type` (
  `contact_type_id` int(10) UNSIGNED NOT NULL,
  `contact_type` char(30) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `credit_card`
--

CREATE TABLE `credit_card` (
  `credit_card_id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `credit_card_number` char(16) NOT NULL,
  `credit_card_type` int(10) UNSIGNED NOT NULL,
  `expiration_date` date NOT NULL,
  `cvv` char(6) DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `credit_card_type`
--

CREATE TABLE `credit_card_type` (
  `credit_card_type_id` int(10) UNSIGNED NOT NULL,
  `credit_card_type` char(30) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `item_id` int(10) UNSIGNED NOT NULL,
  `item_title` char(255) NOT NULL,
  `item_subtitle` char(255) DEFAULT NULL,
  `item_category_id` int(10) UNSIGNED NOT NULL,
  `item_subcategory_id` int(10) UNSIGNED DEFAULT NULL,
  `created_by` int(10) UNSIGNED DEFAULT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`item_id`, `item_title`, `item_subtitle`, `item_category_id`, `item_subcategory_id`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'Mobile Phone 2', 'Mobile phone less then 5000', 1001, 1001, 1001, '2019-11-11', 1001, '2019-11-12');

-- --------------------------------------------------------

--
-- Table structure for table `item_category`
--

CREATE TABLE `item_category` (
  `item_category_id` int(10) UNSIGNED NOT NULL,
  `item_category` char(50) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_category`
--

INSERT INTO `item_category` (`item_category_id`, `item_category`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'Electronics', 1001, '2019-11-11', 1001, '2019-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `item_subcategory`
--

CREATE TABLE `item_subcategory` (
  `item_subcategory_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `item_subcategory` char(50) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_subcategory`
--

INSERT INTO `item_subcategory` (`item_subcategory_id`, `category_id`, `item_subcategory`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 1001, 'Mobile', 1001, '2019-11-11', 1001, '2019-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `postal_code`
--

CREATE TABLE `postal_code` (
  `postal_code_id` int(10) UNSIGNED NOT NULL,
  `postal_code` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `price_id` int(10) UNSIGNED NOT NULL,
  `item_id` int(10) UNSIGNED NOT NULL,
  `price_type` int(10) UNSIGNED DEFAULT NULL,
  `active_flag` text NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `amount` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `price_type`
--

CREATE TABLE `price_type` (
  `price_type_id` int(10) UNSIGNED NOT NULL,
  `price_type` char(50) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(10) UNSIGNED NOT NULL,
  `state` varchar(20) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'Karnataka', 1001, '2019-11-11', 1001, '2019-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `system_user`
--

CREATE TABLE `system_user` (
  `system_user_id` int(10) UNSIGNED NOT NULL,
  `system_user_name` char(20) NOT NULL,
  `system_user_type` int(10) UNSIGNED NOT NULL,
  `first_name` char(20) DEFAULT NULL,
  `middle_name` char(20) DEFAULT NULL,
  `last_name` char(20) DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `system_user`
--

INSERT INTO `system_user` (`system_user_id`, `system_user_name`, `system_user_type`, `first_name`, `middle_name`, `last_name`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'kylebirc_admin', 1, NULL, NULL, NULL, 1001, '2019-11-10', 1, '2019-11-10');

-- --------------------------------------------------------

--
-- Table structure for table `system_user_type`
--

CREATE TABLE `system_user_type` (
  `system_user_type_id` int(10) UNSIGNED NOT NULL,
  `system_user_type` char(30) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `system_user_type`
--

INSERT INTO `system_user_type` (`system_user_type_id`, `system_user_type`, `created_by`, `creation_date`, `last_updated_by`, `last_update_date`) VALUES
(1001, 'database administrator', 1, '2019-11-10', 1, '2019-11-10'),
(1002, 'database developer', 1, '2019-11-10', 1, '2019-11-10');

-- --------------------------------------------------------

--
-- Table structure for table `telephone`
--

CREATE TABLE `telephone` (
  `telephone_id` int(10) UNSIGNED NOT NULL,
  `contact_id` int(10) UNSIGNED NOT NULL,
  `area_code` char(3) NOT NULL,
  `telephone_number` char(20) NOT NULL,
  `telephone_type` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `telephone_type`
--

CREATE TABLE `telephone_type` (
  `telephone_type_id` int(10) UNSIGNED NOT NULL,
  `telephone_type` char(30) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transaction_id` int(10) UNSIGNED NOT NULL,
  `account_id` int(10) UNSIGNED NOT NULL,
  `transaction_type` int(10) UNSIGNED DEFAULT NULL,
  `transaction_date` date NOT NULL,
  `amount` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_item`
--

CREATE TABLE `transaction_item` (
  `transaction_item_id` int(10) UNSIGNED NOT NULL,
  `transaction_id` int(10) UNSIGNED NOT NULL,
  `item_id` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction_type`
--

CREATE TABLE `transaction_type` (
  `transaction_type_id` int(10) UNSIGNED NOT NULL,
  `transaction_type` char(50) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `creation_date` date NOT NULL,
  `last_updated_by` int(10) UNSIGNED NOT NULL,
  `last_update_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`),
  ADD KEY `account_fk1` (`account_type`),
  ADD KEY `account_fk2` (`created_by`),
  ADD KEY `account_fk3` (`last_updated_by`);

--
-- Indexes for table `account_type`
--
ALTER TABLE `account_type`
  ADD PRIMARY KEY (`account_type_id`),
  ADD KEY `account_type_fk1` (`created_by`),
  ADD KEY `account_type_fk2` (`last_updated_by`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `address_fk1` (`address_type`),
  ADD KEY `address_fk2` (`account_id`),
  ADD KEY `address_fk3` (`city_state_id`),
  ADD KEY `address_fk4` (`postal_code_id`),
  ADD KEY `address_fk5` (`created_by`),
  ADD KEY `address_fk6` (`last_updated_by`);

--
-- Indexes for table `address_type`
--
ALTER TABLE `address_type`
  ADD PRIMARY KEY (`address_type_id`),
  ADD KEY `address_type_fk1` (`created_by`),
  ADD KEY `address_type_fk2` (`last_updated_by`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `city_fk1` (`created_by`),
  ADD KEY `city_fk2` (`last_updated_by`);

--
-- Indexes for table `city_state`
--
ALTER TABLE `city_state`
  ADD PRIMARY KEY (`city_state_id`),
  ADD KEY `city_state_fk1` (`city_id`),
  ADD KEY `city_state_fk2` (`state_id`),
  ADD KEY `city_state_fk3` (`created_by`),
  ADD KEY `city_state_fk4` (`last_updated_by`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `contact_fk1` (`account_id`),
  ADD KEY `contact_fk2` (`contact_type`),
  ADD KEY `contact_fk3` (`created_by`),
  ADD KEY `contact_fk4` (`last_updated_by`);

--
-- Indexes for table `contact_type`
--
ALTER TABLE `contact_type`
  ADD PRIMARY KEY (`contact_type_id`),
  ADD KEY `contact_type_fk1` (`created_by`),
  ADD KEY `contact_type_fk2` (`last_updated_by`);

--
-- Indexes for table `credit_card`
--
ALTER TABLE `credit_card`
  ADD PRIMARY KEY (`credit_card_id`),
  ADD KEY `credit_card_fk1` (`account_id`),
  ADD KEY `credit_card_fk2` (`credit_card_type`),
  ADD KEY `credit_card_fk3` (`created_by`),
  ADD KEY `credit_card_fk4` (`last_updated_by`);

--
-- Indexes for table `credit_card_type`
--
ALTER TABLE `credit_card_type`
  ADD PRIMARY KEY (`credit_card_type_id`),
  ADD KEY `credit_card_type_fk1` (`created_by`),
  ADD KEY `credit_card_type_fk2` (`last_updated_by`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `item_fk1` (`item_category_id`),
  ADD KEY `item_fk2` (`item_subcategory_id`),
  ADD KEY `item_fk3` (`created_by`),
  ADD KEY `item_fk4` (`last_updated_by`);

--
-- Indexes for table `item_category`
--
ALTER TABLE `item_category`
  ADD PRIMARY KEY (`item_category_id`),
  ADD KEY `item_category_fk1` (`created_by`),
  ADD KEY `item_category_fk2` (`last_updated_by`);

--
-- Indexes for table `item_subcategory`
--
ALTER TABLE `item_subcategory`
  ADD PRIMARY KEY (`item_subcategory_id`),
  ADD KEY `item_subcategory_fk1` (`category_id`),
  ADD KEY `item_subcategory_fk2` (`created_by`),
  ADD KEY `item_subcategory_fk3` (`last_updated_by`);

--
-- Indexes for table `postal_code`
--
ALTER TABLE `postal_code`
  ADD PRIMARY KEY (`postal_code_id`),
  ADD KEY `postal_code_fk1` (`created_by`),
  ADD KEY `postal_code_fk2` (`last_updated_by`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`price_id`),
  ADD KEY `price_fk1` (`item_id`),
  ADD KEY `price_fk2` (`price_type`),
  ADD KEY `price_fk3` (`created_by`),
  ADD KEY `price_fk4` (`last_updated_by`);

--
-- Indexes for table `price_type`
--
ALTER TABLE `price_type`
  ADD PRIMARY KEY (`price_type_id`),
  ADD KEY `price_type_fk1` (`created_by`),
  ADD KEY `price_type_fk2` (`last_updated_by`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`),
  ADD KEY `state_fk1` (`created_by`),
  ADD KEY `state_fk2` (`last_updated_by`);

--
-- Indexes for table `system_user`
--
ALTER TABLE `system_user`
  ADD PRIMARY KEY (`system_user_id`),
  ADD KEY `system_user_fk1` (`system_user_type`),
  ADD KEY `system_user_fk2` (`created_by`),
  ADD KEY `system_user_fk3` (`last_updated_by`);

--
-- Indexes for table `system_user_type`
--
ALTER TABLE `system_user_type`
  ADD PRIMARY KEY (`system_user_type_id`),
  ADD KEY `system_user_type_fk1` (`created_by`),
  ADD KEY `system_user_type_fk2` (`last_updated_by`);

--
-- Indexes for table `telephone`
--
ALTER TABLE `telephone`
  ADD PRIMARY KEY (`telephone_id`),
  ADD KEY `telephone_fk1` (`contact_id`),
  ADD KEY `telephone_fk2` (`telephone_type`),
  ADD KEY `telephone_fk3` (`created_by`),
  ADD KEY `telephone_fk4` (`last_updated_by`);

--
-- Indexes for table `telephone_type`
--
ALTER TABLE `telephone_type`
  ADD PRIMARY KEY (`telephone_type_id`),
  ADD KEY `telephone_type_fk1` (`created_by`),
  ADD KEY `telephone_type_fk2` (`last_updated_by`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `transaction_fk1` (`account_id`),
  ADD KEY `transaction_fk2` (`transaction_type`),
  ADD KEY `transaction_fk3` (`created_by`),
  ADD KEY `transaction_fk4` (`last_updated_by`);

--
-- Indexes for table `transaction_item`
--
ALTER TABLE `transaction_item`
  ADD PRIMARY KEY (`transaction_item_id`),
  ADD KEY `transaction_item_fk1` (`transaction_id`),
  ADD KEY `transaction_item_fk2` (`item_id`),
  ADD KEY `transaction_item_fk3` (`created_by`),
  ADD KEY `transaction_item_fk4` (`last_updated_by`);

--
-- Indexes for table `transaction_type`
--
ALTER TABLE `transaction_type`
  ADD PRIMARY KEY (`transaction_type_id`),
  ADD KEY `transaction_type_fk1` (`created_by`),
  ADD KEY `transaction_type_fk2` (`last_updated_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `account_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1003;
--
-- AUTO_INCREMENT for table `account_type`
--
ALTER TABLE `account_type`
  MODIFY `account_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1005;
--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `address_type`
--
ALTER TABLE `address_type`
  MODIFY `address_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `city_state`
--
ALTER TABLE `city_state`
  MODIFY `city_state_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `contact_type`
--
ALTER TABLE `contact_type`
  MODIFY `contact_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `credit_card`
--
ALTER TABLE `credit_card`
  MODIFY `credit_card_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `credit_card_type`
--
ALTER TABLE `credit_card_type`
  MODIFY `credit_card_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `item_category`
--
ALTER TABLE `item_category`
  MODIFY `item_category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `item_subcategory`
--
ALTER TABLE `item_subcategory`
  MODIFY `item_subcategory_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `postal_code`
--
ALTER TABLE `postal_code`
  MODIFY `postal_code_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `price_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `price_type`
--
ALTER TABLE `price_type`
  MODIFY `price_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `system_user`
--
ALTER TABLE `system_user`
  MODIFY `system_user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;
--
-- AUTO_INCREMENT for table `system_user_type`
--
ALTER TABLE `system_user_type`
  MODIFY `system_user_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1003;
--
-- AUTO_INCREMENT for table `telephone`
--
ALTER TABLE `telephone`
  MODIFY `telephone_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `telephone_type`
--
ALTER TABLE `telephone_type`
  MODIFY `telephone_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transaction_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transaction_item`
--
ALTER TABLE `transaction_item`
  MODIFY `transaction_item_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `transaction_type`
--
ALTER TABLE `transaction_type`
  MODIFY `transaction_type_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `account_fk1` FOREIGN KEY (`account_type`) REFERENCES `account_type` (`account_type_id`),
  ADD CONSTRAINT `account_fk2` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `account_fk3` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `account_type`
--
ALTER TABLE `account_type`
  ADD CONSTRAINT `account_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `account_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_fk1` FOREIGN KEY (`address_type`) REFERENCES `address_type` (`address_type_id`),
  ADD CONSTRAINT `address_fk2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  ADD CONSTRAINT `address_fk3` FOREIGN KEY (`city_state_id`) REFERENCES `city_state` (`city_state_id`),
  ADD CONSTRAINT `address_fk4` FOREIGN KEY (`postal_code_id`) REFERENCES `postal_code` (`postal_code_id`),
  ADD CONSTRAINT `address_fk5` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `address_fk6` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `address_type`
--
ALTER TABLE `address_type`
  ADD CONSTRAINT `address_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `address_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `city_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `city_state`
--
ALTER TABLE `city_state`
  ADD CONSTRAINT `city_state_fk1` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`),
  ADD CONSTRAINT `city_state_fk2` FOREIGN KEY (`state_id`) REFERENCES `state` (`state_id`),
  ADD CONSTRAINT `city_state_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `city_state_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_fk1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  ADD CONSTRAINT `contact_fk2` FOREIGN KEY (`contact_type`) REFERENCES `contact_type` (`contact_type_id`),
  ADD CONSTRAINT `contact_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `contact_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `contact_type`
--
ALTER TABLE `contact_type`
  ADD CONSTRAINT `contact_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `contact_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `credit_card`
--
ALTER TABLE `credit_card`
  ADD CONSTRAINT `credit_card_fk1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  ADD CONSTRAINT `credit_card_fk2` FOREIGN KEY (`credit_card_type`) REFERENCES `credit_card_type` (`credit_card_type_id`),
  ADD CONSTRAINT `credit_card_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `credit_card_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `credit_card_type`
--
ALTER TABLE `credit_card_type`
  ADD CONSTRAINT `credit_card_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `credit_card_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_fk1` FOREIGN KEY (`item_category_id`) REFERENCES `item_category` (`item_category_id`),
  ADD CONSTRAINT `item_fk2` FOREIGN KEY (`item_subcategory_id`) REFERENCES `item_subcategory` (`item_subcategory_id`),
  ADD CONSTRAINT `item_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `item_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `item_category`
--
ALTER TABLE `item_category`
  ADD CONSTRAINT `item_category_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `item_category_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `item_subcategory`
--
ALTER TABLE `item_subcategory`
  ADD CONSTRAINT `item_subcategory_fk1` FOREIGN KEY (`category_id`) REFERENCES `item_category` (`item_category_id`),
  ADD CONSTRAINT `item_subcategory_fk2` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `item_subcategory_fk3` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `postal_code`
--
ALTER TABLE `postal_code`
  ADD CONSTRAINT `postal_code_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `postal_code_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `price_fk1` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
  ADD CONSTRAINT `price_fk2` FOREIGN KEY (`price_type`) REFERENCES `price_type` (`price_type_id`),
  ADD CONSTRAINT `price_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `price_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `price_type`
--
ALTER TABLE `price_type`
  ADD CONSTRAINT `price_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `price_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `state`
--
ALTER TABLE `state`
  ADD CONSTRAINT `state_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `state_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `system_user`
--
ALTER TABLE `system_user`
  ADD CONSTRAINT `system_user_fk1` FOREIGN KEY (`system_user_type`) REFERENCES `system_user_type` (`system_user_type_id`),
  ADD CONSTRAINT `system_user_fk2` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `system_user_fk3` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `system_user_type`
--
ALTER TABLE `system_user_type`
  ADD CONSTRAINT `system_user_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `system_user_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `telephone`
--
ALTER TABLE `telephone`
  ADD CONSTRAINT `telephone_fk1` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`contact_id`),
  ADD CONSTRAINT `telephone_fk2` FOREIGN KEY (`telephone_type`) REFERENCES `telephone_type` (`telephone_type_id`),
  ADD CONSTRAINT `telephone_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `telephone_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `telephone_type`
--
ALTER TABLE `telephone_type`
  ADD CONSTRAINT `telephone_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `telephone_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_fk1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  ADD CONSTRAINT `transaction_fk2` FOREIGN KEY (`transaction_type`) REFERENCES `transaction_type` (`transaction_type_id`),
  ADD CONSTRAINT `transaction_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `transaction_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `transaction_item`
--
ALTER TABLE `transaction_item`
  ADD CONSTRAINT `transaction_item_fk1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`transaction_id`),
  ADD CONSTRAINT `transaction_item_fk2` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`),
  ADD CONSTRAINT `transaction_item_fk3` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `transaction_item_fk4` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);

--
-- Constraints for table `transaction_type`
--
ALTER TABLE `transaction_type`
  ADD CONSTRAINT `transaction_type_fk1` FOREIGN KEY (`created_by`) REFERENCES `system_user` (`system_user_id`),
  ADD CONSTRAINT `transaction_type_fk2` FOREIGN KEY (`last_updated_by`) REFERENCES `system_user` (`system_user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
