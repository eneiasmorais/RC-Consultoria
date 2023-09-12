from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
import smtplib
from config import email, password


app = Flask(__name__)
app.secret_key = "rcconsult"

mail_settings = {
    "MAIL_ADDRESS": email,
    "MAIL_PASSWORD": password,
    "MAIL_SERVER": "mail.rcconsultoriatributaria.com.br",
    "MAIL_PORT": 465,
    "MAIL_USE_SSL": True,
    "MAIL_USE_TLS": False,
}

app.config.update(mail_settings)
mail = Mail(app)


class Contato:
    def __init__(self, name, email, subject, message):
        self.name = (name,)
        self.email = (email,)
        self.subject = (subject,)
        self.message = message


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        formContato = Contato(
            request.form["name"], request.form["email"], request.form["message"]
        )

        msg = Message(
            subject=f"{formContato.name} te enviou uma mensagem com o assunto: {formContato.subject}",
            sender=app.config.get("MAIL_ADDRESS"),
            recipients=[
                "contato@rcconsultoriatributaria.com.br",
                "carolineuchoa@rcconsultoriatributaria.com.br",
                "regianelima@rcconsultoriatributaria.com.br",
            ],
            body=f"""

            {formContato.name} com o e-mail {formContato.email}, te enviou a seguinte mensagem:

            {formContato.message}

            """,
        )
        mail.send(msg)
        flash("Mensagem enviada com sucesso!")

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
