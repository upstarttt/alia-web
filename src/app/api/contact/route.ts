import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, mensaje } = body;

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Aquí normalmente usarías un servicio de email como SendGrid, Resend, etc.
    // Por ahora, simulamos el envío exitoso
    console.log('Email que se enviaría a jorgefloresrv@gmail.com:');
    console.log('De:', email);
    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);

    // En producción, aquí usarías algo como:
    // await sendEmail({
    //   to: 'jorgefloresrv@gmail.com',
    //   subject: `Nueva solicitud de demo de aliA - ${nombre}`,
    //   html: `
    //     <h2>Nueva solicitud de demo</h2>
    //     <p><strong>Nombre:</strong> ${nombre}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Mensaje:</strong> ${mensaje}</p>
    //   `
    // });

    return NextResponse.json(
      { message: '¡Gracias! Te contactaremos pronto.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 