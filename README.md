Network Adequacy: Time and Distance Standards

# Local Development

Two dockers are available for development:
- Explorer: A contaner running jupyter notebook for easy exploration and model testing.
- Backend: A container running a Flask API served by uWSGI and Nginx.

## Setup
In the main folder, you should add a `.env` with the following info:
```
REACT_APP_MAPBOX_TOKEN=$MAPBOX_TOKEN
AWS_ACCESS_KEY=YOUR_KEY
AWS_SECRET_KEY=YOUR_SECRET
```


## Explorer

```
docker-compose up -d explorer
```

- Open a browser and navigate to `localhost:8888`.

This environment gives you the following:
- geopandas
- scikit-learn
- statsmodels
- seaborn

## Backend - API

```
docker-compose up -d backend
```

- The API will then be accessible on port 8080. `localhost:8080`.
- Three POST endpoints are available to you:
	- /api/providers
	- /api/representative_points
	- /api/adequacies
