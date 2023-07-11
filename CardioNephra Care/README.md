# CardioNephra Care - Your Health Matters

## About
CardioNephra Care is a User friendly Website that predicts following:

- Liklihood of patients getting Heart Disease.
- Liklihood of patients getting Kidney Disease.

This platform accepts the medical information about the patients as input, which is further used by the models to predict the likelihood of patients getting heart and kidney health ailments respectively and outputs the result in the form of printable Report.  

## Accuracy of the Models and Algorithms Used

| Disease      | Algorithm Used |
| :---        |    :----:   |     
| Heart Ailment   | Logistic Regression        | 
| Kidney Disease | Random Forests |


## Datasets Used

The Datasets Used for this Project were taken from <a href="https://www.kaggle.com/">Kaggle</a>

- <a href="https://www.kaggle.com/ronitf/heart-disease-uci">Heart Ailment Dataset</a>.
- <a href="https://www.kaggle.com/mansoordaku/ckdisease">Kidney Disease Dataset</a>.


## Steps to Run the Website on your System

==> Python Version 3.11 was used for this Project.<br>
- Clone or download the repo.
- Open command prompt in the downloaded folder.
- Install the Dependencies.
```
pip install -r requirements.txt
```
- Run the Flask App.
```
python app.py
```
- Prompt returns: Running on http://localhost:5000
- After sucessfully running flask server copy the url http://localhost:5000 prompted on the terminal, paste it in any default browser and run it.