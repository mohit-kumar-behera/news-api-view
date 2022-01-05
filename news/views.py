from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.utils import timezone
from django.urls import reverse
import datetime
import requests

def home(request, countryCode):
	ENDPOINT_URL = 'http://newsapi.org/v2/top-headlines'
	time_from = timezone.now() - datetime.timedelta(days=7)
	url = f'{ENDPOINT_URL}?country={countryCode}&pageSize=100&from={time_from}&sortBy="popularity"&apiKey=56168070f1c9446cb98dade52f70a719'
	response = requests.get(url)

	if response.status_code == 200:
		context = dict(response.json())
	else:
		context = {'message':'Something Went wrong. We are not accepting any Response'}
	return render(request,'news/home.html',context)

def redirect_home(request):
	return HttpResponseRedirect(reverse('news:home',args=('in',)))
