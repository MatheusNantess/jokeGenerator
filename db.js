const express = require('express')
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'jokes',
    password: 'Dezembro3112',
})

const executeQuery = async (sql, values = []) => {
    const [rows] = await pool.execute(sql, values);
    return rows;
  };

  module.exports = {
    executeQuery
  }
