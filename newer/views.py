from django.shortcuts import render
from django.http import JsonResponse
from django.core.urlresolvers import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView, ListView
from models import *
# Create your views here.


def index(request):
    return render(request, 'slides.html')

class AjaxableResponseMixin(object):
    def form_invalid(self, form):
        response = super(AjaxableResponseMixin, self).form_invalid(form)
        if self.request.is_ajax():
            data = {
                'state': 'error'
            }
            print form.errors
            return JsonResponse(data, status=400)
        else:
            return response

    def form_valid(self, form):
        response = super(AjaxableResponseMixin, self).form_valid(form)
        if self.request.is_ajax():
            data = {
                'state': 'success'
            }
            return JsonResponse(data)
        else:
            return response


class CreatePersonView(AjaxableResponseMixin, CreateView):
    model = Person
    fields = ['name', 'student_num', 'college', 'phone', 'qq', 'introduction']
    template_name = 'person_create_form.html'
    success_url = reverse_lazy('create_person_view')


class PersonListView(LoginRequiredMixin, ListView):
    login_url = '/admin/'
    model = Person
    context_object_name = 'person_list'
    template_name = 'list.html'

