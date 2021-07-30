from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from .models import Movie
from .serializers import MovieSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import permissions


# Create your views here.
class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [IsOwnerOrReadOnly]
