import { createConnection, Connection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

interface Cliente {
  id: string;
  nombre: string;
  email: string;
  ubicacion: string;
  telefono: string;
  signedUp: string;
}

export async function getClientesFromDatabase(): Promise<Cliente[]> {
  const connection: Connection = await createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mrs_paquetes_db',
  });

  try {
    const [rows] = await connection.query<RowDataPacket[]>(
      `SELECT 
        c.id,
        c.nombre,
        c.email,
        CONCAT(d.nombre, ', ', m.nombre) AS ubicacion,
        c.telefono,
        DATE_FORMAT(c.fecha_registro, '%M %d, %Y') AS signedUp
      FROM clientes AS c
      INNER JOIN departamento AS d ON c.id_departamento = d.id
      INNER JOIN municipios AS m ON c.id_municipio = m.id`
    );

    const clientes: Cliente[] = rows.map(row => ({
      id: row.id as string,
      nombre: row.nombre as string,
      email: row.email as string,
      ubicacion: row.ubicacion as string,
      telefono: row.telefono as string,
      signedUp: row.signedUp as string
    }));

    return clientes;
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    throw error;
  } finally {
    await connection.end();
  }
}
