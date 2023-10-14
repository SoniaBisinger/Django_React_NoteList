from django.urls import path
from .views import NoteList, NoteDetail

urlpatterns = [
    path('notes/', NoteList.as_view(), name="notes"),
    path('notes/<int:pk>', NoteDetail.as_view(), name='note-detail'),
]

# /notes GET, POST
# /notes/<id> GET, PUT, DELETE
