#!/usr/bin/env python3
import json

file_name = "movies.json"
with open(file_name) as json_in:
	movie_list = json.load(json_in)
	
for i in range(0, len(movie_list['Search'])):
	print(f" The {movie_list['Search'][i]['Type']} {movie_list['Search'][i]['Title']} came out in {movie_list['Search'][i]['Year']}. You can find out more information at https://www.imdb.com/title/{movie_list['Search'][i]['imdbID']} \n")