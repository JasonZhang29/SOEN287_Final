# SOEN287 Web Programming Take-Home Final Exam
# Winter 2020

import csv
from flask import Flask, render_template, redirect
from flask_wtf import FlaskForm
from wtforms import SubmitField, BooleanField, RadioField
from wtforms.fields.html5 import EmailField
from wtforms.validators import Email, DataRequired
from wtforms_components import ColorField

app = Flask(__name__)
app.config['SECRET_KEY'] = "Don't tell anybody"


# TODO: Question 2: Survey FlaskForm
# Write your survey FlaskForm starting on the next line
class SurveyForm(FlaskForm):
    email = EmailField('Email', validators=[Email()])
    hidden = BooleanField('Hide my email')
    color = ColorField('Color', validators=[DataRequired()])
    season = RadioField('Your favorite season', choices=[('a', 'Spring'), ('b', 'Summer'),
                                                         ('c', 'Fall'), ('d', 'Winter')],
                        validators=[DataRequired(message="Please indicate a selection")])
    submit = SubmitField('Submit')


# end of your survey FlaskForm


@app.route('/')
def exam():
    return render_template('exam.html', page='')


# TODO: Question 1: questions endpoints
# Routes for the 4 questions templates starting on the next line
@app.route('/q1')
def q1():
    page = 'q1'
    return render_template('q1.html', page=page)


@app.route('/q2')
def q2():
    page = 'q2'
    return render_template('q2.html', page=page)


@app.route('/q3')
def q3():
    page = 'q3'
    return render_template('q3.html', page=page)


@app.route('/q4')
def q4():
    page = 'q4'
    return render_template('q4.html', page=page)


@app.route('/codes')
def codes():
    return render_template('codes.html')
# End of the 4 questions templates


# TODO: Question 2: Survey Endpoint
# Write your survey endpoint starting on the next line
@app.route('/survey', methods=['GET', 'POST'])
def survey():
    form = SurveyForm()
    if form.validate_on_submit():
        with open('data/survey.csv', 'a') as f:
            writer = csv.writer(f)
            writer.writerow([form.email.data, form.hidden.data,
                             form.color.data, form.season.data])
        return redirect('/survey/results')
    return render_template('survey.html', form=form)
# end of your survey endpoint


# TODO: Question 3: Survey Results Endpoint
# Write your survey results endpoint starting on the next line
@app.route('/survey/results')
def results():
    line_counter = 0;
    lines = []
    hidden = []
    choice = []
    results = []
    with open('data/survey.csv') as f:
        reader = csv.reader(f, delimiter=',')
        for row in reader:
            hidden.append(row[1])
            choice.append(row[3])
            lines.append(row)
            line_counter += 1
        results.append(line_counter)
        anonymous = 0
        for data in hidden:
            if data == 'True':
                anonymous += 1
        results.append(anonymous)
        results.append(anonymous / line_counter)
        numOfA = 0
        numOfB = 0
        numOfC = 0
        numOfD = 0
        for data in choice:
            if data == 'a':
                numOfA += 1
            elif data == 'b':
                numOfB += 1
            elif data == 'c':
                numOfC += 1
            elif data == 'd':
                numOfD += 1
        results.append(numOfA)
        results.append(numOfB)
        results.append(numOfC)
        results.append(numOfD)
        results.append(numOfA / line_counter)
        results.append(numOfB / line_counter)
        results.append(numOfC / line_counter)
        results.append(numOfD / line_counter)
        for row in lines:
            if row[1] == 'True':
                row[0] = ''
    return render_template("results.html", list=results, rows=lines)
# end of your survey results endpoint


# TODO: Question 4: JavaScript and regular expressions
# Write your postal codes endpoint starting on the next line

# end of your postal codes endpoint


if __name__ == '__main__':
    app.run()
