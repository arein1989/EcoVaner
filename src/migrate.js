import mysql from 'mysql2';
import { db } from './firebaseConfig.js';
import { collection, addDoc } from 'firebase/firestore';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'tree_app_db'
});

export const migrateData = async () => {
    try {
        connection.connect(err => {
            if (err) {
                console.error('Database connection error:', err);
                return;
            }
            console.log('Connected to MySQL database');
        });

        // Migrate categories
        connection.query('SELECT * FROM categories', async (err, results) => {
            if (err) throw err;
            for (const row of results) {
                await addDoc(collection(db, 'categories'), row);
            }
            console.log('Categories migrated');
        });

        // Migrate users
        connection.query('SELECT * FROM users', async (err, results) => {
            if (err) throw err;
            for (const row of results) {
                await addDoc(collection(db, 'users'), row);
            }
            console.log('Users migrated');
        });

        // Migrate user_points
        connection.query('SELECT * FROM user_points', async (err, results) => {
            if (err) throw err;
            for (const row of results) {
                await addDoc(collection(db, 'user_points'), row);
            }
            console.log('User points migrated');
        });

        // Migrate user_levels
        connection.query('SELECT * FROM user_levels', async (err, results) => {
            if (err) throw err;
            for (const row of results) {
                await addDoc(collection(db, 'user_levels'), row);
            }
            console.log('User levels migrated');
        });

        // Migrate checklists
        connection.query('SELECT * FROM checklists', async (err, results) => {
            if (err) throw err;
            for (const row of results) {
                await addDoc(collection(db, 'checklists'), row);
            }
            console.log('Checklists migrated');
        });
    } catch (error) {
        console.error('Error migrating data:', error);
    } finally {
        connection.end();
    }
};
